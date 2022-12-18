package bnext.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/service")
public class UserService {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    WebClient.Builder webClientBuilder;



    @RequestMapping("/{userId}")
    public void getCatalog(@PathVariable("userId") String userId) {
        String jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGRvOTciLCJpYXQiOjE2NzEzOTE3OTcsImV4cCI6MTY3MTQwOTc5N30.twCnR68z24nKVMDsDsUJ02S35qu_eh4OcXjK3emFtB7hlml8HpfcRMf-Uj18qvx9EZdEQg20qQhyStoIFNKPfw";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwt);
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        //System.out.println("Passo "+requestEntity);
        String url = "http://OTHER-SERVICE/cars/";
        List<Car> cars = List.of(restTemplate.exchange(url, HttpMethod.GET, requestEntity, Car[].class).getBody());

        System.out.println("Funzionaaaa "+cars);

    }

    @RequestMapping("")
    public void ciao() {



        System.out.println("Funzionaaaa ");

    }


}
