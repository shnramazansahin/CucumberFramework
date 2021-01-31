package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.security.PublicKey;

public class CyrstalKeyLoginPage {
   public CyrstalKeyLoginPage () {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(id="UserName")
    public WebElement userName;

    @FindBy(id="Password")
    public WebElement password;
    @FindBy(id="btnSubmit")
    public WebElement loginButton;
}
