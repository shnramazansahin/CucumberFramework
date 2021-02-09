package database_stepdefinitions;

import Utilities.Driver;
import io.cucumber.java.en.Given;
import org.junit.Assert;


import java.awt.*;
import java.sql.*;

public class DBRead_StepDefinitions {
    /*
    how to do JDBC test ?
    i set the url first , username and passowrd. After i create my connection, Statment and ResultSet objects
    used statment to write query
    ResultSet, to get the data
     */
    String url = "jdbc:sqlserver://184.168.194.58:1433;databaseName=crystalkeyhotels2;user=Ahmet_User;password=Ahmet123!";
    String userName= "Ahmet_User";
    String password= "Ahmet123!";
    Connection connection; // to connect to databese
    Statement statement; //  to write the aueries
    ResultSet resultSet; // will be used to get the data

    @Given("user connects the database")
    public void user_connects_the_database() throws SQLException {

        connection = DriverManager.getConnection(url, userName,password);


    }

    @Given("user gets {string} from {string} table")
    public void user_gets_from_table(String string, String string2) throws SQLException {
     statement=connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
     resultSet=statement.executeQuery(" SELECT " + string+ " FROM " + string2);

    }
    @Given("user read all rows in the {string} column")
    public void user_read_all_rows_in_the_column(String string) throws SQLException {
       // we have the result in resultset object, we can get use that data
       // skipping the first row
        resultSet.next();
        resultSet.next();

      // getting the data on the next row --> resultSet.getObject("Prices");
      Object object =resultSet.getObject(string);
        System.out.println(object);
        resultSet.next();
        String result=resultSet.getString(string);
        System.out.println(result);
        resultSet.next();
        String result1=resultSet.getString(string);
        System.out.println(result1);

        resultSet.absolute(5); // go to row 5
        resultSet.first(); // take us to first row
        resultSet.last(); // take us the last row
        // this runs while there is a data in the next data
        while(resultSet.next()) {
            Object object1=resultSet.getObject(string);
            System.out.println(object1);
        }

    }
    @Given("users gets the value in row {int} in {string} column and verifies the value is {string}")
    public void users_gets_the_value_in_row_in_column_and_verifies_the_value_is(Integer int1, String string, String string2) throws SQLException {
       resultSet.absolute(int1); // go to the that row= row1
       Object dataInRow2=resultSet.getObject(string); // go to data on that row
        Assert.assertEquals(string2,dataInRow2.toString()); // assert if the row2 data equals expected data= string 2

    }

}
