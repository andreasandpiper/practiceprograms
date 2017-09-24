board = [[1,2,3], [4,5,6], [7,8,9]]
win = [[1,5,9], [3,5,7]]
played = []
is_winner = False
playerX = []
playerO = []

#---------------------- FUNCTIONS TO RUN TIC TAC TOE -------------------------------------

## creates all the possible winning solutions
def create_board():
	j = 0
	while j < len(board):
		win.append(board[j])
		k = 0
		score = []
		while k < len(board):
			score.append(board[k][j])
			k += 1
		win.append(score)
		score = []
		j += 1

#prints the game board
def game_board():
	print "GAME BOARD\n"
	print " 1 | 2 | 3\n"
	print " __  __  __\n"
	print " 4 | 5 | 6\n"
	print " __  __  __\n"
	print " 7 | 8 | 9\n"

##checks current players list to see if it contains winning arrangements
def check_winner(player_picks):
	i = 0
	result = False
	while i < len(win):
		j = 0
		while j < len(win[i]):
			if (win[i][j] in player_picks):
				result = True
			else:
				result = False
				break
			j += 1
		if (result):
			return True
		i += 1
	return False


#----------------------- START GAME -------------------------------------

create_board()
X = str(raw_input("Welcome to Tic Tac Toe.\nWhat is player X's name? "))
while not X.isalpha():
    print("Your name must consist of letters only")
    X = str(raw_input())
O = str(raw_input("What is player O's name? "))
while not O.isalpha():
    print("Your name must consist of letters only")
    O = str(raw_input())

print "%s is player X and %s is player O. \nNow that I have two players, I will explain the game. Every time it's your turn I will display..... the board,  what you have picked so far and what has already been picked. You will then enter then number of the square you would like to pick. Best of luck to both of you!" % (X, O)

while (is_winner == False or len(played) < 9):
    game_board() #show board
    print "%s, this is what you have picked so far: %s" % (X, playerX)#show what player X has picked
    print "This is what has already been picked: %s" % (played)#show what has been picked over all
    print "Alright %s, it is time to pick!" % (X) #player X picks
    X_pick = int(raw_input())
    while X_pick in played:
    	X_pick = int(raw_input("Pick a different number that has not been picked. This is what has been chosen so far: %s\n" % played))
    else:
	    playerX.append(X_pick)
	    played.append(X_pick)
	    if (len(playerX) >=3):
		    if (check_winner(playerX)):
		    	print "Congratulations, %s, you win!! Your winning match was %s" % (X, playerX)
		    	is_winner = True # check to see if X array includes any of the winning combos
		    	break

    #repeat for player O
    game_board() #show board
    print "%s, this is what you have picked so far: %s" % (O, playerO)#show what player X has picked
    print "This is what has already been picked: %s" % (played)#show what has been picked over all
    print "Alright %s, it is time to pick!" % (O) #player X picks
    O_pick = int(raw_input())
    while O_pick in played:
    	O_pick = int(raw_input("Pick a different number that has not been picked.  This is what has been chosen so far: %s\n" % played))
    else:
    	playerO.append(O_pick)
    	played.append(O_pick)
    	if (len(playerO) >=3):
    		if (check_winner(playerO)):
    			print "Congratulations, %s, you win!! Your winning match was %s" % (O, playerO)
    			is_winner = True # check to see if X array includes any of the winning combos
    			break
