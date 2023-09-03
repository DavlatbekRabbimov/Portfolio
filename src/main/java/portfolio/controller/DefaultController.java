package portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DefaultController {

    @GetMapping("/")
    public String mainPage(){
        return "mainPage";
    }

//    @GetMapping("/secondPage.html")
//    public String secondPage(){
//        return "secondPage";
//    }
}
