import random

guessesTaken = 0
minNumber = 1
maxNumber = 20

print("Hi! What's your name?")
username = input()


number = random.randint(minNumber, maxNumber)

# los numeros nos lo puedo imprimir asi directamente en consola los tengo que convertir a string con str
print("Well, " + username + ". I'm thinking in a number between " + str(minNumber) + " and " + str(maxNumber))

# el juego solo dara hasta 6 intentos pa adivinar el number
while guessesTaken < 6:
  print("Take a guess: ")
  # capturo la entrada del usuario como un string
  guess = input()
  # convierto a entero el numero que introdujo el usuario
  guess = int(guess)

  guessesTaken += 1

  if guess < number:
    print("Your guess is too Low.")
  if guess > number:
    print("Your guess is to High.")
  if guess == number:
    break


if guess == number:
  print("Good Job. " + username + "! you guessed my number in " + str(guessesTaken) + " guesses")
if guess != number:
  number = str(number)
  print("No, the number I was thinking of was " + number)

  


