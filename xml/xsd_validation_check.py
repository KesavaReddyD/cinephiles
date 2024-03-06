from lxml import etree
xml_file = r"C:/Users/dsske/Desktop/webtech/website/xml/xsd_registration.xml"
xsd_file = r"C:/Users/dsske/Desktop/webtech/website/xml/Schema.xsd"
xmlschema = etree.XMLSchema(file=xsd_file)
xmlparser = etree.XMLParser(schema=xmlschema)
try:
    etree.parse(xml_file, xmlparser)
    print("Validation successful.")
except etree.XMLSyntaxError as e:
    print("Validation failed: " + str(e))
