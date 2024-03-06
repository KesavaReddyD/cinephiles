<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/db">
        <html>
            <body>
                 <h2>students registration details</h2>
                 <table border ="1">  
                    <tr>
                        <th>user_name</th>
                        <th>password</th>
                        <th>email_id</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>gender</th>  
                    </tr>
                <xsl:for-each select ="student_profiles">
                    <tr>
                        <td><xsl:value-of select ="user_name"/></td>
                        <td><xsl:value-of select ="password"/></td>
                        <td><xsl:value-of select ="email_id"/></td>
                        <td><xsl:value-of select ="mobile"/></td>
                        <td><xsl:value-of select ="address"/></td>
                        <td><xsl:value-of select ="gender"/></td> 
                    </tr>
                  </xsl:for-each>
                 </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
