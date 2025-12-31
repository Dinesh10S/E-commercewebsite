package com.example.clothstorebackend.controller;

import com.example.clothstorebackend.model.Order;
import com.example.clothstorebackend.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class OrderController {

    private final OrderRepository repo;

    public OrderController(OrderRepository repo) {
        this.repo = repo;
    }

    // SAVE ORDER
    @PostMapping("/orders")
    public Order saveOrder(@RequestBody Order order) {
        return repo.save(order);
    }

    // GET ALL ORDERS (for history page)
    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return repo.findAll();
    }
}
