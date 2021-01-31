package StepDefinitions;

import Pages.GooglePage;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;


public class Day17_GoogleSearchStepDefinitions {
    GooglePage googlePage = new GooglePage();

    @Given("user is on the google page")
    public void user_is_on_the_google_page() {
        Driver.getDriver().get("https://www.google.com");
    }

    @When("user search for iPhone")
    public void user_search_for_iPhone() {
        googlePage.searhBox.sendKeys("iPhone" + Keys.ENTER);
    }

    @Then("verify the result has iPhone")
    public void verify_the_result_has_iPhone() {
        String title = Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(title.contains("iphone"));
    }

    @When("user search for tea pot")
    public void user_search_for_tea_pot() {
        googlePage.searhBox.sendKeys("tea pot" + Keys.ENTER);
    }

    @Then("verify the result has tea pot")
    public void verify_the_result_has_tea_pot() {
        String title = Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(title.contains("tea pot"));
    }

    @When("user search for flower")
    public void user_search_for_flower() {
        googlePage.searhBox.sendKeys("flower" + Keys.ENTER);
    }

    @Then("verify the result has flower")
    public void verify_the_result_has_flower() {
        String title = Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(title.contains("flower"));
    }

    @When("user search for bmw")
    public void user_search_for_bmw() {
        googlePage.searhBox.sendKeys("bmw" + Keys.ENTER);
    }

    @Then("verify the result bmw")
    public void verify_the_result_bmw() {
        String title = Driver.getDriver().getTitle().toLowerCase();
        Assert.assertTrue(title.contains("bmw"));
    }
    @Given("user on the google page")
    public void user_on_the_google_page() {
        Driver.getDriver().get("https://www.google.com");
    }

    @Then("verify the result has {string}")
    public void verify_the_result_has(String string) {
        String title = Driver.getDriver().getTitle();
        Assert.assertTrue(title.contains(string));
    }

    @When("user search for {string}")
    public void user_search_for(String string) {
        googlePage.searhBox.sendKeys(string + Keys.ENTER);
    }




    @Then("user closes the application")
    public void user_closes_the_application() {
        Driver.closeDriver();
    }


}
