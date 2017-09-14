# Jinn's Python miniprograms: leap year checker
line = input()
while line:
    line = int(line)
    if line % 4 == 0 and (line % 100 != 0 or line % 400 == 0):
        print("The year {0} is a leap year.".format(line))
    else:
        print("The year {0} is not a leap year.".format(line))
    line = input()
