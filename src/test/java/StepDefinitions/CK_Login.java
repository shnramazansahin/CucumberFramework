package StepDefinitions;

import Pages.CyrstalKeyLoginPage;
import Pages.CyrstalKeyMainPage;
import Utilities.ConfigReader;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Keys;

public class CK_Login {
    CyrstalKeyMainPage mainPage= new CyrstalKeyMainPage();
    CyrstalKeyLoginPage loginPage = new CyrstalKeyLoginPage();
    @Given("user is on the main page")
    public void user_is_on_the_main_page() {
        Driver.getDriver().get(ConfigReader.getProperty("qa_environment"));
    }
    @When("clicks on the login button")
    public void clicks_on_the_login_button() {
        mainPage.logInButton.click();
    }

    @When("user enter the  username {string}")
    public void user_enter_the_username(String string) {
      loginPage.userName.sendKeys(string);
    }

    @When("user enter the  password {string}")
    public void user_enter_the_password(String string) {
       loginPage.password.sendKeys(string);
    }

    @Then("clicks on the login button on the page")
    public void clicks_on_the_login_button_on_the_page() {
        loginPage.loginButton.click();

    }



}
