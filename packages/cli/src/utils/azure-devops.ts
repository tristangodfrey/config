import prompts from "prompts";
import axios, {Axios, AxiosError} from "axios";
import { VariableGroupsAPI } from "../devops-api";
import {VariableGroupParameters} from "../devops-api/generated";

export const createVariableGroup = async (
    variables: any,
    groupName: string,
    pat: string,
    org: string,
    project: string
) => {

    const cleanName = groupName.replace('/', '-').replace('@', '')

    const api = new VariableGroupsAPI(pat, org, project);

    const res = await api.getVariableGroups();

    //@ts-ignore
    const existing = res.value.find(vg => vg.name === cleanName)

    const b: VariableGroupParameters = {
        description: "foobar",
        name: cleanName,
        variables,
        variableGroupProjectReferences: [
            {
                name: cleanName,
                description: `Environment variables`,
                projectReference: {
                    name: project
                }
            }
        ]
    }

    if (existing) {

        console.log(`Updating existing variable group: ${cleanName}`);

        if (existing.id) {
            try {
                const res = await api.updateVariableGroup(existing.id.toString(), b)

                if (res.status === 200) {
                    console.log(`Variable group ${cleanName} updated.`)
                } else {
                    console.error(`Error updating variable group ${cleanName}`)
                    // console.error(res)
                }
            } catch (e) {
                //@ts-ignore
                console.error(e.response.data)
            }



        }


    } else {
        console.log(`Creating new variable group: ${cleanName}`)

        const res = await api.createVariableGroup(b)

        if (res.status === 200) {
            console.log(`Variable group ${cleanName} created.`)
        } else {
            console.error(`Error creating variable group ${cleanName}`)
        }
    }





    //Check if the variable group exists
    // const res = await VariablegroupsService.variablegroupsAdd(org, b).catch((err) => console.error(err));

    // console.log(res);
}
