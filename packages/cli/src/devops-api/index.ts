import axios, {Axios} from "axios"
import {VariableGroup, VariableGroupParameters} from "./generated";

export class VariableGroupsAPI {

    private readonly axios: Axios;

    constructor(pat: string, org: string, project: string) {
        this.axios = new Axios({
            ...axios.defaults,
            baseURL: `https://dev.azure.com/${org}/${project}/_apis/distributedtask/variablegroups`,
            params: {
                'api-version': '7.0'
            },
            headers: {
                Authorization: `Basic ${Buffer.from(`:${pat}`).toString('base64')}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

    async getVariableGroups(): Promise<Array<VariableGroup>> {
        return (await this.axios.get('/')).data
    }

    async createVariableGroup(params: VariableGroupParameters) {
        return this.axios.post('/', params)
    }

    async updateVariableGroup(id: string, params: VariableGroupParameters) {
        return this.axios.put(`/${id}`, params)
    }

}
