package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
			
			features = "src/test/java/feature",
			glue = "stepDefinitions", tags ="@RegTest",strict=true,
			plugin= {"pretty","html:target/Cucumber.html","json:target/cucumber.json","junit:target/Cucumber.xml"})

	
	public class TestRunner {
}
