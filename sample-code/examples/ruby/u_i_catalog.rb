# This test demonstrates the many, many things you can do with Appium.
#
# It relies on the setup in simple_test.rb, which is also a good starting 
# point to make sure you can run any tests at all.

require 'rspec'
require 'selenium-webdriver'

include Selenium::WebDriver::DriverExtensions::HasTouchScreen

APP_PATH = '../../apps/UICatalog/build/Release-iphonesimulator/UICatalog.app'

def capabilities
  {
      'browserName' => 'iOS',
      'platform' => 'Mac',
      'version' => '6.0',
      'app' => absolute_app_path
  }
end

def absolute_app_path
    File.join(File.dirname(__FILE__), APP_PATH)
end

def server_url
  "http://127.0.0.1:4723/wd/hub"
end

def go_back
  @driver.find_element(:name, "Back").click
end

describe "UI Catalog" do
  before(:all) do
    @driver = Selenium::WebDriver.for(:remote, :desired_capabilities => capabilities, :url => server_url)
    
   end

  describe "An Element" do

    subject { @driver.find_elements(:tag_name, "tableView")[0]}
    
    it {should_not be nil}

    context "when used as a selection context" do

      it "Can be a selection context" do
        rows = subject.find_elements(:tag_name, "tableCell")
        rows.size.should eq 12
      end
    
      it "does not return elements it does not contain" do
        nav_bar = subject.find_elements(:tag_name, "navigationBar")
        nav_bar.length.should be 0
      end
    end

    # Not currently working, no text being returned
    it "returns its text" do
      rows = subject.find_elements(:tag_name, "tableCell")
      rows[0].attribute(:name).should eq "Buttons, Various uses of UIButton"
    end
  
  end

  describe "position" do
    it "is returned by the driver" do
      third_row = @driver.find_elements(:tag_name, "tableCell")[2]
      third_row.location.x.should be 0
      third_row.location.y.should be 152
    end
  end

  describe "Screenshots" do
    it "can be made in base 64" do
      screenshot = @driver.screenshot_as :base64
      screenshot.should_not be_nil
    end

    it "can be saved to the filesystem" do
      @driver.save_screenshot("./pretty_app.png")
    end
  end

  describe "attributes" do

    before :all do
      @driver.find_elements(:tag_name, "tableCell")[9].click
      @switch = @driver.find_element(:tag_name, "switch")
    end

    # Go back to the menu when you're done
    after :all do
      go_back
    end

    it "can be tested for visibility" do
      @switch.displayed?.should be_true
    end
    
    it "can be tested for usability"

    # TODO: Text checking still seems... Not good.
    it "can have text checked" do
      @switch.text.should eq "Tinted"
    end

    it "can have values checked" do
      # Check if this switch is off
      @switch.attribute("value").should be 0
    end

    it "reflect changes in their values" do
        @switch.click
        @switch.attribute("value").should be 1
    end
  end

  describe "text fields" do

    before :all do
      @driver.find_elements(:tag_name, "tableCell")[2].click
      @text_field = @driver.find_element(:tag_name, "textField")
    end

    after :all do
      go_back
    end

    it "can accept key presses" do
      @text_field.send_keys("discombobulate")
    end

    it "can be checked for text" do
      @text_field.attribute("value").should eq "discombobulate"
    end

    it "can accept key presses as an ActionChain"

    it "can be cleared" do
      @text_field.clear
      @text_field.attribute("value").should eq "<enter text>"
    end



  end

  describe "alerts" do
    before :all do
      @driver.find_elements(:tag_name, "tableCell")[10].click
      @elements = @driver.find_elements(:tag_name, "staticText")
    end

    after :all do
      go_back
    end

    it "can be clicked"

    it "can be interacted with"

    it "can be dismissed"

    it "can be modal & have buttons" do
      modal = @driver.find_elements(:tag_name, "staticText")
    end
  end

  describe "scrolling" do

    after :all do
      go_back
    end
  
    # Not yet implemented
    it "can be done with co-ordinates" do
      row = @driver.find_elements(:tag_name, "tableCell")[2]
      initial_location = row.location
      action = @driver.touch.scroll(0, -20)

      action.perform
      initial_location.should_not eq row.location
    end
  end

  describe "sliders" do
    
    before :all do
      @driver.find_elements(:tag_name, "tableCell")[1].click
    end

    it "can have their values read" do
      slider = @driver.find_element(:tag_name, "slider")
      slider.attribute("value").should eq "50%"
    end
  end



end
