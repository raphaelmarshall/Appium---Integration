package io.appium.android.bootstrap.utils;

import junit.framework.TestCase;
import org.w3c.dom.Node;
import org.xml.sax.InputSource;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;
import java.io.StringReader;
import java.util.ArrayList;

public class XMLHierarchyTest extends TestCase {

  private static XPath xpath = XPathFactory.newInstance().newXPath();

  public void testGetClassInstancePairs() throws Exception {

    String xmlString = "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><hierarchy rotation=\"0\"><android.widget.FrameLayout index=\"0\" text=\"\" resource-id=\"\" class=\"android.widget.FrameLayout\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[0,0][480,800]\" instance=\"0\"><android.view.View index=\"0\" text=\"\" resource-id=\"android:id/action_bar\" class=\"android.view.View\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[0,38][480,110]\" instance=\"0\"><android.widget.TextView index=\"0\" text=\"TestApp\" resource-id=\"android:id/action_bar_title\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[73,55][173,92]\" instance=\"0\"/><android.widget.ImageButton index=\"1\" text=\"\" resource-id=\"\" class=\"android.widget.ImageButton\" package=\"com.droidzilla.testapp\" content-desc=\"More options\" checkable=\"false\" checked=\"false\" clickable=\"true\" enabled=\"true\" focusable=\"true\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[396,38][480,110]\" instance=\"0\"/></android.view.View><android.widget.GridView index=\"1\" text=\"\" resource-id=\"com.droidzilla.testapp:id/cm_course_books_grid\" class=\"android.widget.GridView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"true\" enabled=\"true\" focusable=\"true\" focused=\"true\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[3,113][477,797]\" instance=\"0\"><android.widget.RelativeLayout index=\"0\" text=\"\" resource-id=\"\" class=\"android.widget.RelativeLayout\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"true\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[3,113][238,413]\" instance=\"0\"><android.widget.TextView index=\"0\" text=\"Image 0\" resource-id=\"com.droidzilla.testapp:id/bookStatus\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[82,136][158,165]\" instance=\"1\"/><android.widget.TextView index=\"1\" text=\"John\" resource-id=\"com.droidzilla.testapp:id/bookTitle\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[96,361][144,390]\" instance=\"2\"/></android.widget.RelativeLayout><android.widget.RelativeLayout index=\"1\" text=\"\" resource-id=\"\" class=\"android.widget.RelativeLayout\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"true\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[241,113][476,413]\" instance=\"1\"><android.widget.TextView index=\"0\" text=\"Image 1\" resource-id=\"com.droidzilla.testapp:id/bookStatus\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[320,136][396,165]\" instance=\"3\"/><android.widget.TextView index=\"1\" text=\"Dan\" resource-id=\"com.droidzilla.testapp:id/bookTitle\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[339,361][377,390]\" instance=\"4\"/></android.widget.RelativeLayout><android.widget.RelativeLayout index=\"2\" text=\"\" resource-id=\"\" class=\"android.widget.RelativeLayout\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"true\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[3,416][238,716]\" instance=\"2\"><android.widget.TextView index=\"0\" text=\"Image 2\" resource-id=\"com.droidzilla.testapp:id/bookStatus\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[82,439][158,468]\" instance=\"5\"/><android.widget.TextView index=\"1\" text=\"Mary\" resource-id=\"com.droidzilla.testapp:id/bookTitle\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[96,664][145,693]\" instance=\"6\"/></android.widget.RelativeLayout><android.widget.RelativeLayout index=\"3\" text=\"\" resource-id=\"\" class=\"android.widget.RelativeLayout\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"true\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[241,416][476,716]\" instance=\"3\"><android.widget.TextView index=\"0\" text=\"Image 3\" resource-id=\"com.droidzilla.testapp:id/bookStatus\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[320,439][396,468]\" instance=\"7\"/><android.widget.TextView index=\"1\" text=\"Diana\" resource-id=\"com.droidzilla.testapp:id/bookTitle\" class=\"android.widget.TextView\" package=\"com.droidzilla.testapp\" content-desc=\"\" checkable=\"false\" checked=\"false\" clickable=\"false\" enabled=\"true\" focusable=\"false\" focused=\"false\" scrollable=\"false\" long-clickable=\"false\" password=\"false\" selected=\"false\" bounds=\"[331,664][386,693]\" instance=\"8\"/></android.widget.RelativeLayout></android.widget.GridView></android.widget.FrameLayout></hierarchy>\n";
    InputSource testInput = new InputSource(new StringReader(xmlString));

    Node root = (Node) xpath.evaluate("/", testInput, XPathConstants.NODE);


    XPathExpression expression = xpath.compile("//android.widget.GridView/android.widget.RelativeLayout");
    ArrayList<ClassInstancePair> pairs = XMLHierarchy.getClassInstancePairs(expression, root);
    assertEquals(4, pairs.size());
    assertEquals("android.widget.RelativeLayout", pairs.get(0).getAndroidClass());
    assertEquals("0", pairs.get(0).getInstance());
    assertEquals("2", pairs.get(2).getInstance());

  }

  public void testFormatXMLInput() throws Exception {
    String xmlString = "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><hierarchy><foo0 class='class0'><foo1 class='class1'></foo1><foo0 class='class0'></foo0><foo1 class='class1'></foo1></foo0><foo1 class='class1'></foo1></hierarchy>";
    InputSource testInput = new InputSource(new StringReader(xmlString));

    Node formatted = XMLHierarchy.formatXMLInput(testInput);

    Node childNode = formatted.getFirstChild().getFirstChild();

    assertEquals("class0", childNode.getNodeName());
    assertEquals("0", childNode.getAttributes().getNamedItem("instance").getNodeValue());

    childNode = formatted.getFirstChild().getLastChild();

    assertEquals("class1", childNode.getNodeName());
    assertEquals("2", childNode.getAttributes().getNamedItem("instance").getNodeValue());

  }
}