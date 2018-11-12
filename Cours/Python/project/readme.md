### 1. le chemin de project:

```tree
/projet/
|--------App.py
|--------form/
|-------------|__init__.py
```

### 2. Déclarer les fonctions dans  

`form/__init__.p`

### 3. Exécuter le programme dans le terminal:


`python App.py`


### 4. Le résult final:

```html
<form>
  <select name="couleurs">
    <option value="#ff9900" />orange</option>
    <option value="#00ff00" />vert</option>
    <option value="#ff0000" selected />rouge</option>
    <option value="#ff00ff" />violet</option>
    <option value="#0000ff" />bleu</option>
    <option value="#000000" />noir</option>
    <option value="#ffffff" />blanc</option>
    <option value="#ffff00" />jaune</option>
  </select>
  <input type="submit" value="Envoyer">
</form> 
```