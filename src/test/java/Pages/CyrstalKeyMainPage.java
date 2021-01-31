package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CyrstalKeyMainPage {
   public CyrstalKeyMainPage() {

        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(linkText = "Log in" )
    public WebElement logInButton;
}
