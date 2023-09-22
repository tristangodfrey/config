import prompts from "prompts";
import axios from "axios";

export const createVariableGroup = async (variables: any, groupName: string) => {

    const response = await prompts({
        type: 'text',
        name: 'pat',
        message: 'Enter Azure PAT'
    });

    const TOKEN: string = response.pat;

    const cleanName = groupName.replace('/', '-').replace('@', '')

    axios.post(
        `https://dev.azure.com/ETO-CICD/SIERRA/_apis/distributedtask/variablegroups?api-version=6.0`,
        {
            description: "foobar",
            name: cleanName,
            variables,
            variableGroupProjectReferences: [
                {
                    name: cleanName,
                    description: `Environment variables`,
                    projectReference: {
                        name: 'SIERRA'
                    }
                }
            ]
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`:${TOKEN}`).toString('base64')}`
            }
        }
    )
        .then(response => {
            // Logic for waiting for each pipeline to finish could go here
            // For now, let's just print the response for debugging
            console.log("Pipeline Trigger Response:", response.data);
        })
        .catch(error => {
            console.error("Failed to trigger pipeline:", error);
        });
}
