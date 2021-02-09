package StepDefinitions;

import Pages.CrystalKeyRoomReservationPage;
import Pages.CyrstalKeyLoginPage;
import Pages.DefaultPage;
import Utilities.ConfigReader;
import Utilities.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.Select;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class Day25_CrystalKeyRoomReservationStepDef {
    CyrstalKeyLoginPage loginpage= new CyrstalKeyLoginPage();
    @Given("user is on the log in page")
    public void user_is_on_the_log_in_page() {
        Driver.getDriver().get(ConfigReader.getProperty("Login"));

    }

    @Given("user enters username and password")
    public void user_enters_username_and_password(DataTable credentials) {
       // Data Table
       List<String>loginData = credentials.row(0); // getting the first row data as list of string
       loginpage.userName.sendKeys(loginData.get(0)); // getting the first colum data from feature file
       loginpage.password.sendKeys(loginData.get(1));// second data
    }

    @Given("user clicks on the login button")
    public void user_clicks_on_the_login_button() {
        loginpage.loginButton.click();
    }

    DefaultPage defaultPage= new DefaultPage();
    @Given("user goes to room reservation page")
    public void user_goes_to_room_reservation_page() throws InterruptedException {
    defaultPage.hotelManagement.click();
    defaultPage.roomReservations.click();
        Thread.sleep(5000);
    }
    CrystalKeyRoomReservationPage roomReservationPage = new CrystalKeyRoomReservationPage();
    @Given("enter all required fields and click save button")
    public void enter_all_required_fields_and_click_save_button(DataTable fields) {
        roomReservationPage.addRoomReservationButton.click();
        Select idUser = new Select(roomReservationPage.idUser);
        idUser.selectByIndex(2);
        Select idHotel = new Select(roomReservationPage.idHotelRoom);
        idHotel.selectByIndex(3);
        List<String> testdata = fields.row(1);
        roomReservationPage.price.sendKeys(testdata.get(0));
        roomReservationPage.dateStart.sendKeys(testdata.get(1));
        roomReservationPage.dateEnd.sendKeys(testdata.get(2));
        roomReservationPage.adultAmount.sendKeys(testdata.get(3));
        roomReservationPage.childrenAmount.sendKeys(testdata.get(4));
        roomReservationPage.nameAndSurname.sendKeys(testdata.get(5));
        roomReservationPage.contactPhone.sendKeys(testdata.get(6));
        roomReservationPage.contactEmail.sendKeys(testdata.get(7));
        roomReservationPage.notes.sendKeys(testdata.get(8));
        roomReservationPage.approved.click();
        roomReservationPage.isPaid.click();
        roomReservationPage.saveButton.click();

    }
    @Then("verify the succes message")
        public void verify_the_succes_message () throws InterruptedException {

        Thread.sleep(2000);
            Assert.assertTrue(roomReservationPage.actualSuccessMessage.getText().contains("successfully"));
        }

    @Then("user takes the screenshot")
    public void user_takes_the_screenshot() throws IOException {
        //       I use this code to take a screenshot when needed
        // naming the screenshot with the current date to avoid duplication
        String date = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        // TakesScreenshot is an interface of selenium that takes the screenshot
        TakesScreenshot ts = (TakesScreenshot) Driver.getDriver();
        File source = ts.getScreenshotAs(OutputType.FILE);
        // full path to the screenshot location
        String target = System.getProperty("user.dir") + "/test-output/Screenshots/" + date + ".png";
        File finalDestination = new File(target);
        // save the screenshot to the path given
        FileUtils.copyFile(source, finalDestination);
    }
















    }



