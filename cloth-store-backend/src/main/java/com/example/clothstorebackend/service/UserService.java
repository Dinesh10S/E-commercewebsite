package com.example.clothstorebackend.service;

import com.example.clothstorebackend.model.User;
import com.example.clothstorebackend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // SIGNUP
    public User signup(User user) {
        if (repo.findByEmail(user.getEmail()) != null) {
            return null; // email already exists
        }
        return repo.save(user);
    }

    // LOGIN
    public User login(String email, String password) {
        User user = repo.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
