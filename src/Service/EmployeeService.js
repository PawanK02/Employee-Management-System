import axios from 'axios';
const url = "http://localhost:8181";
class EmployeeService{
    getAllEmployees(){
        return axios.get(url);
    }
    createEmp(employee) {
        return axios.post(url, employee)
    }
    deleteEmp(employeeid){
        return axios.delete(url+ '/'+employeeid);
    }
    getEmpById(employeeid){
        return axios.get(url+ '/'+employeeid);
    }
    updateEmp(employeeid,employee){
        return axios.put(url+'details/'+employeeid,employee);
    }

}
// eslint-disable-next-line
export default new EmployeeService();