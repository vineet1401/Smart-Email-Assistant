package com.vineet.smartemail.controller;

import com.vineet.smartemail.DTO.EmailRequest;
import com.vineet.smartemail.service.EmailGeneratorService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String email = emailGeneratorService.generateEmail(emailRequest);

        return ResponseEntity.ok("Email generated successfully \n" + email);
    }
}
