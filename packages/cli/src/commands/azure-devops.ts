import inquirer, { QuestionCollection } from "inquirer";
import { VariableGroupsAPI } from "../devops-api";
import { VariableGroupParameters } from "../devops-api/generated";
import { figure } from "@figure-config/core";
import { packagePath } from "../utils/fs";

export const createVariableGroup = async (
    variables: any,
    groupName: string,
    pat: string,
    org: string,
    project: string,
) => {
    const cleanName = groupName.replace("/", "-").replace("@", "");

    const api = new VariableGroupsAPI(pat, org, project);

    const res = await api.getVariableGroups();

    //@ts-ignore
    const existing = res.value.find((vg) => vg.name === cleanName);

    const b: VariableGroupParameters = {
        description: "foobar",
        name: cleanName,
        variables,
        variableGroupProjectReferences: [
            {
                name: cleanName,
                description: `Environment variables`,
                projectReference: {
                    name: project,
                },
            },
        ],
    };

    if (existing) {
        console.log(`Updating existing variable group: ${cleanName}`);

        if (existing.id) {
            try {
                const res = await api.updateVariableGroup(
                    existing.id.toString(),
                    b,
                );

                if (res.status === 200) {
                    console.log(`Variable group ${cleanName} updated.`);
                } else {
                    console.error(`Error updating variable group ${cleanName}`);
                    // console.error(res)
                }
            } catch (e) {
                //@ts-ignore
                console.error(e.response.data);
            }
        }
    } else {
        console.log(`Creating new variable group: ${cleanName}`);

        const res = await api.createVariableGroup(b);

        if (res.status === 200) {
            console.log(`Variable group ${cleanName} created.`);
        } else {
            console.error(`Error creating variable group ${cleanName}`);
        }
    }
};

export const upload = async (subSchema: any, options: any) => {
    const cliConfig = await figure({
        schemaPath: await packagePath("config"),
        subSchema: "azureDevops",
        debug: true,
        prompt: true,
    });

    console.log(cliConfig);

    const appConfig = await figure({
        subSchema: subSchema,
        returnInstance: true,
    });

    const vars = appConfig.env.getConfigNodesForEnv();

    //Iterate each of them and ask for a value
    const variables: any = {};

    const questions: QuestionCollection = vars.map((v) => {
        return {
            message: v.envVarName,
            type: "input",
            name: v.envVarName,
        };
    });

    const answers = await inquirer.prompt(questions);

    //Upload the list to azure variable group
    for (const envVar of vars) {
        variables[envVar.envVarName] = {
            value: answers[envVar.envVarName].value,
            isReadOnly: false,
            isSecret: envVar.isSecret,
        };
    }

    await createVariableGroup(
        variables,
        subSchema,
        cliConfig.pat,
        options.org,
        cliConfig.project,
    );
};
