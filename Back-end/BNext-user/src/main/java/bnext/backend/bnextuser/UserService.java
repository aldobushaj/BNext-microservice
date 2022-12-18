package bnext.backend.bnextuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/service")
public class UserService {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    WebClient.Builder webClientBuilder;



    @RequestMapping("/{userId}")
    public void getCatalog(@PathVariable("userId") String userId) {
        String jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGRvOTciLCJpYXQiOjE2NzEzNjY5MDcsImV4cCI6MTY3MTM4NDkwN30.TYo86Tg07Q0yPv9frJAFe4r3eaviyF3ESIU8RlF37tyRb036p2JH6-CCTXJAgAo32FB5PGTi4-DL9Fs5s8Pm9A";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + jwt);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        System.out.println("Passo "+requestEntity);
        String url = "http://other-service/cars/";
        Car car = restTemplate.getForObject(url, Car.class,requestEntity);

        System.out.println("Funzionaaaa "+car.toString());

    }

    @RequestMapping("")
    public void ciao() {



        System.out.println("Funzionaaaa ");

    }


}
