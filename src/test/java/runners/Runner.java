package runners;

import Utilities.Driver;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {      "html:target/default-cucumber-reports",
                        "json:target/json-report/cucumber.json",
                        "junit:target/xml-report/cucumber.xml"



        },
        // path of the feature folder
        features = "src/test/resources/features",
        // path of the StepDefinitions folder
        glue = "StepDefinitions",
        tags = "@regression",
        //run the feature file without browser to check/generate the step definition.Set it back to false after u r done
        dryRun = false
)



public class Runner {
    // this class is to run and control the test cases
}
