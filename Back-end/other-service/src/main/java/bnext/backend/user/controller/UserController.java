package bnext.backend.user.controller;

import bnext.backend.security.vo.Response;
import bnext.backend.user.User;
import bnext.backend.user.UserRepository;
import bnext.backend.user.UserService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    UserRepository userRepository;


    @GetMapping("allUsers")
    public @NotNull List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("id={userId}")
    public @Nullable User getUserById(@PathVariable @NotNull String userId) {
        System.out.println("userID " + userId);
        User response= userService.getUserById(userId);
        System.out.println("Found User " + response.toString());
        return response;
    }

    @GetMapping("name={userName}")
    public @Nullable User getUserByName(@PathVariable String userName) {
        return userService.getUserByName(userName);
    }

    @DeleteMapping(value = "del={userId}")
    public @NotNull ResponseEntity<String> deleteUser(@PathVariable @NotNull String userId) {
        return userService.deleteUser(userId);
    }

    /*-----LOGIN / SIGNIN----- */
    @PostMapping("/signin")
    public ResponseEntity<Response> generateJwtToken(@RequestBody User user) {
        //System.out.println("**************Entrato in signin del controller**************");
        return userService.signIn(user);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody @NotNull User user) {
        return userService.signUp(user);

    }

    @PostMapping("/google")
    public ResponseEntity<Response> googleLogin(@RequestBody @NotNull User user) {
        return userService.googleLogin(user);

    }

    @PutMapping("/update")
    public String updateUser(@RequestBody @NotNull User user){
        return userService.updateUser(user);
    }
}
