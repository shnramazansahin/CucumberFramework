package runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports3",
                "json:target/json-report/cucumber3.json",
                "junit:target/xml-report/cucumber3.xml"


        },
        // path of the feature folder
        features = "src/test/resources/features",
        // path of the StepDefinitions folder
        glue = "StepDefinitions",
        tags = "@smoke",
        //run the feature file without browser to check/generate the step definition.Set it back to false after u r done
        dryRun = false
)

public class SmokeTestRunner {

}
