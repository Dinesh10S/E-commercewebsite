package com.example.clothstorebackend.repository;

import com.example.clothstorebackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
