# PowerShell is a verb-noun scripting language. The first in the cmdlet is the verb such as get, set, and add
# Count the amount of verbs in cmdlets used in powershell
(get-verb | measure-object).count

# The noun part is service, process and more. To get a full list of nouns used you can use the command
# get-command -noun * (there are quite a few). 
get-command -noun * | format-wide -Column 8

# This will display the verb distrebution witch you should analyze to get a better handle on the Windows PowerShell cmdlets
Get-Command -CommandType cmdlet | group verb | sort count -Descending

# For example, when you get a service in Windows PowerShell, you are really getting an object that represents the service. 
# When you view information about a service, you are viewing the properties of its service object.
# When you start a service, you are using a method of the service object.