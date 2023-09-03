package portfolio.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Slf4j
@RequestMapping("api")
@RestController
public class ApiController {

    @PostMapping("/search_engine")
    private ResponseEntity<?> searchEngine() {
        try {
            Process process = Runtime.getRuntime().exec("java -jar src/main/resources/se/SearchEngine-1.0-SNAPSHOT.jar");

            try(BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()))){
                String line;
                while((line = bufferedReader.readLine()) != null) {
                    log.info(line);
                }
            }

            int exitCode = process.waitFor();
            if (exitCode > 0){
                log.error("Search engine exit with code: " + exitCode);
                return ResponseEntity.status(500).body("Запуск второго приложения остановлен!");
            }

            return ResponseEntity.ok().build();
        } catch (IOException | InterruptedException e) {
            log.error("Ошибка при запуске второго приложения: " + e.getMessage());
            return ResponseEntity.status(500).body("Ошибка при запуске второго приложения");
        }
    }

}


