#proyecto python paswork 1.1.0 "Esto es un comentario esto no es leido por el interprete del lenguage"

#crearemos un algoritmo

#input paswork
def enable(x , y):
    p= str(input('Es tablezca una contrace`na: '))
    c= str(input('Confirme su contrace`na: '))
    if p == c:
        print("Contrace`na establesida correctamente")
        return  p
    else:
        print('Su contrace`na no coinside intentelo nuevamente ')
        enable()
paswork= enable()

print(f"su contracena es {paswork}")