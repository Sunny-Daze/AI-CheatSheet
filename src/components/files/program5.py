boardcount = 0
def IsBoardOk (board, row, col) :

 #if queen X takes position to the left of column col on the same row.
 for c in range(col) :
   if (board[row][c] == 'X') :
     return False

 #if queen X takes position on the upper left diagonal
 for r, c in zip(range(row-1, -1, -1), range(col-1, -1, -1)) :
   if (board[r][c] == 'X') :
     return False

 #if queen X takes position on the lower left diagonal
 for r, c in zip(range(row+1, len(board), 1), range(col-1, -1, -1)) :
   if (board[r][c] == 'X') :
     return False

 return True

def DisplayBoard (board) :
  for row in board :
    print(row)

def PlaceNQueens (board, col) :

  # If all the columns have a queen 'Q', a solution has been found.
  global boardcount

  if (col >= len(board)) :

    boardcount += 1
    print("Chessboard " + str(boardcount))
    print("--------------------------")
    DisplayBoard(board)
    print("--------------------------\n")

  else :

    # Else try placing the queen on each row of the column and check if the chessboard remains OK.
    for row in range(len(board)) :

      board[row][col] = 'X'

      if (IsBoardOk(board, row, col) == True) :
        # Chess board was OK, hence try placing the queen 'Q' in the next column.
        PlaceNQueens(board, col + 1)

      board[row][col] = '.'; # As previously placed queen was not valid, restore '.'

def main() :

 board = []
 N = int(input("Enter No. of queens : "))

 for i in range(N) :
   row = ["."] * N
   board.append(row)

 # Start placing the queen 'X' from the 0'th column.
 PlaceNQueens(board, 0)

if __name__ == "__main__" :
  main()

