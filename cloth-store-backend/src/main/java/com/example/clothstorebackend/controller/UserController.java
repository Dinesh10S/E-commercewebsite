package com.example.clothstorebackend.controller;

import com.example.clothstorebackend.model.User;
import com.example.clothstorebackend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // 🔐 SIGNUP API  (INGA THAAN)
    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        User saved = userService.signup(user);
        return saved == null ? "EMAIL_EXISTS" : "SUCCESS";
    }

    // 🔐 LOGIN API
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User loggedUser = userService.login(
                user.getEmail(),
                user.getPassword()
        );
        return loggedUser != null ? "SUCCESS" : "FAIL";
    }
}
