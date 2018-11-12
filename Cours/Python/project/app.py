from form import gen_form
from form import gen_select
from form import gen_option
from form import gen_input
couleurs = {
    '#ff9900': 'orange',
    '#00ff00': 'vert',
    '#ff0000': 'rouge',
    '#ff00ff': 'violet',
    '#0000ff': 'bleu',
    '#000000': 'noir',
    '#ffffff': 'blanc',
    '#ffff00': 'jaune'
}
if __name__ == '__main__':
	i = gen_input()
	o = gen_option(couleurs)
	s = gen_select(o)
	print(gen_form(s+i))

