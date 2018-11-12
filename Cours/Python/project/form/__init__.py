def gen_form(contenu):
	return "<form>\n{}\n</form>".format(contenu)

def gen_select(contenu):
	return "\t<select name=\"couleurs\">\n{}\t</select>".format(contenu)

def gen_option(couleurs):
	a = ""
	for i in couleurs:
		if couleurs[i] == "rouge":
			a += "".join("\t\t<option value=\"{0}\" selected />{1}</option>\n".format(i, couleurs[i]))
			continue
		a += "".join("\t\t<option value=\"{0}\" />{1}</option>\n".format(i, couleurs[i]))
	return a
def gen_input():
	return "\n\t<input type=\"submit\" value=\"Envoyer\">"

