package com.course.bucket.course.additionals;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.course.bucket.Global;
import com.course.bucket.tools.ToolKit;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@CrossOrigin(origins = Global.HOST)
public class FilterController {

	@Autowired
	private ObjectMapper mapper;
	
	@GetMapping("/public/get-data-for-filter")
	public ObjectNode getDataForFilter() {
		return Filters.getDataForFilter(mapper);
	}
}

