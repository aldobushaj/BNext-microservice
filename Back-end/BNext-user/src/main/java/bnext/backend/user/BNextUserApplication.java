package bnext.backend.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class BNextUserApplication {

    public static void main(String[] args) {
        SpringApplication.run(BNextUserApplication.class, args);
    }

    // con l'annotazione loadBalanced, fa il service discovery, quindi chiama il servizio
    @LoadBalanced
    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

}
