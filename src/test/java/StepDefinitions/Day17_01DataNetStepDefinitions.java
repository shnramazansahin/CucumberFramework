package StepDefinitions;

import Pages.DataNetPage;
import Utilities.ConfigReader;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Day17_01DataNetStepDefinitions {

    DataNetPage dataNetPage = new DataNetPage();

    @Given("user is on the datatable page")
    public void user_is_on_the_datatable_page() {
        Driver.getDriver().get(ConfigReader.getProperty("dt_url"));
    }

    @Given("user clicks on the  new button")
    public void user_clicks_on_the_new_button() {
        dataNetPage.newButton.click();

    }

    @When("user enters the firstname")
    public void user_enters_the_firstname() {
        dataNetPage.firstName.sendKeys("jack");

    }

    @When("user enters the lastname")
    public void user_enters_the_lastname() {
        dataNetPage.lastName.sendKeys("daniel");

    }

    @When("user enters the position")
    public void user_enters_the_position() {
        dataNetPage.position.sendKeys("tester");

    }

    @When("user enters the office")
    public void user_enters_the_office() {
        dataNetPage.office.sendKeys("Tennesse");

    }

    @When("user enters the extention")
    public void user_enters_the_extention() {
        dataNetPage.extension.sendKeys("612");

    }

    @When("user enters the startdate")
    public void user_enters_the_startdate() {
        dataNetPage.startDate.sendKeys("2021-01-24");

    }

    @When("user enters the salary")
    public void user_enters_the_salary() {
        dataNetPage.salary.sendKeys("1123123");

    }

    @When("user clicks on the create button")
    public void user_clicks_on_the_create_button() {
        dataNetPage.createButton.click();

    }

    @When("user rearch the firstname")
    public void user_rearch_the_firstname() {
        dataNetPage.searchBox.sendKeys("jack");

    }

    @Then("verify the name field contains the firstname")
    public void verify_the_name_field_contains_the_firstname() throws InterruptedException {
        Thread.sleep(2000);
        String name = dataNetPage.nameField.getText();
        Assert.assertTrue(name.contains("jack"));

    }

    @When("user enters the firstname {string}")
    public void user_enters_the_firstname(String string) {
        dataNetPage.firstName.sendKeys(string);
    }

    @When("user enters the lastname {string}")
    public void user_enters_the_lastname(String string) {
        dataNetPage.lastName.sendKeys(string);
    }

    @When("user enters the position {string}")
    public void user_enters_the_position(String string) {
        dataNetPage.position.sendKeys(string);
    }

    @When("user enters the office {string}")
    public void user_enters_the_office(String string) {
        dataNetPage.office.sendKeys(string);
    }

    @When("user enters the extention {string}")
    public void user_enters_the_extention(String string) {
        dataNetPage.extension.sendKeys(string);
    }

    @When("user enters the startdate {string}")
    public void user_enters_the_startdate(String string) {
        dataNetPage.startDate.sendKeys(string);
    }

    @When("user enters the salary {string}")
    public void user_enters_the_salary(String string) {
        dataNetPage.salary.sendKeys(string);
    }

    @When("user rearch the firstname {string}")
    public void user_rearch_the_firstname(String string) {
        dataNetPage.searchBox.sendKeys(string);
    }

    @Then("verify the name field contains the firstname {string}")
        public void verify_the_name_field_contains_the_firstname(String string) throws InterruptedException {
        Thread.sleep(2000);
            String name = dataNetPage.nameField.getText();
            Assert.assertTrue(name.contains(string));
        }

}
