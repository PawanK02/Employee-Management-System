package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
@RequestMapping("/")
public class EmpController {
	@Autowired
	JpaRepo repo;
	
	@GetMapping("/")
	public List<Employee> getAllEmp(){
		return repo.findAll();
	}
	@PostMapping("/")
	public Employee insert(@RequestBody Employee emp) {
		return repo.save(emp);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmpById(@PathVariable int id) {
		Employee emp = repo.findById(id).orElseThrow(()->new ResourceNotFound("ID DOESNOT EXISt"));
		return ResponseEntity.ok(emp);
	}
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmp(@PathVariable int id, @RequestBody Employee updtemp){
		Employee updateEmployee = repo.findById(id).orElseThrow(()-> new ResourceNotFound("ID not there"));
		updateEmployee.setAge(updtemp.getAge());
		updateEmployee.setDept(updtemp.getDept());
		updateEmployee.setFirstname(updtemp.getFirstname());
		updateEmployee.setEmail(updtemp.getEmail());
		updateEmployee.setLastname(updtemp.getLastname());
		updateEmployee.setGender(updtemp.getGender());
		updateEmployee.setJob(updtemp.getJob());
		updateEmployee.setSalary(updtemp.getSalary());
		repo.save(updateEmployee);
		return ResponseEntity.ok(updateEmployee);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteEmp(@PathVariable int id){
		Employee employee = repo.findById(id).orElseThrow(()-> new ResourceNotFound("No id"));
		repo.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
