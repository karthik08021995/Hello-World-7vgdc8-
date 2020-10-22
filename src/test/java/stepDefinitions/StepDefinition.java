package stepDefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefinition {
	

	    @Given("^User is on facebook home page$")
	    public void user_is_on_facebook_home_page() throws Throwable {
	        
	    	System.out.println("success");
	    
	    }

	    @When("^User will login with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_will_login_with_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
	    	System.out.println("success");
	    	System.out.println(strArg1);
	    	System.out.println(strArg2);
	    	
	    }

	    @Then("^User will click on Login button$")
	    public void user_will_click_on_login_button() throws Throwable {
	    	System.out.println("success");
	    }

	    @And("^User will verify facebook header$")
	    public void user_will_verify_facebook_header() throws Throwable {
	    	System.out.println("success");
	    }
	    
	    @When("^User will login with following details$")
	    public void user_will_login_with_following_details(DataTable data) throws Throwable {
	     
	    	List<List<String>> obj = data.raw();
	    	System.out.println(obj.get(0).get(0));
	    	System.out.println(obj.get(0).get(1));
	    	System.out.println(obj.get(0).get(2));
	    	System.out.println(obj.get(0).get(3));
	    	System.out.println(obj.get(0).get(5));
	    	
	    	
	    	
	    }
	    @When("^User will login with following details of (.+) and (.+)$")
	    public void user_will_login_with_following_details_of_and(String username, String password) throws Throwable {
	        
	       System.out.println(username+","+password);
	    }
	    
	    
	    @Given("^Validate the browser$")
	    public void validate_the_browser() throws Throwable {
	    	System.out.println("Validate the browser");
	    }

	    @When("^launch the browser$")
	    public void launch_the_browser() throws Throwable {
	    	System.out.println("launch the browser");
	    }

	    @Then("^verify the browser$")
	    public void verify_the_browser() throws Throwable {
	    	System.out.println("verify the browser");
	    }


}
