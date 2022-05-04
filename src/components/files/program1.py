# DFS - Depth First Search

graph = {
  # graph diagram would be given
 'A' : ['B','C','D'],
 'B' : ['A','E'],
 'C' : ['A','E','F'],
 'D' : ['A','F'],
 'E' : ['B','C','H'],
 'F' : ['C','D','G'],
 'G' : ['F','H','K','I'],
 'H' : ['E','G'],
 'I' : ['G','J'],
 'J' : ['I','K'],
 'K' : ['G','J'],
}

visited = set() # Set to keep track of visited nodes of graph.

def dfs(visited, graph, node): #function for dfs 
  if node not in visited:
    print (node)
    visited.add(node)
    for neighbour in graph[node]:
      dfs(visited, graph, neighbour)

# Driver Code
print("Following is the Depth-First Search")
dfs(visited, graph, 'A')

# End of Depth First Search



# BFS - Breadth First Search

graph = {
 'S' : ['1','3'],
 '1' : ['G'],
 '3' : ['1','G','4'],
 '2' : ['1'],
 '4' : ['2','5'],
 '5' : ['2','G'],
 'G' : ['4']
}

visited = [] # List to keep track of visited nodes.
queue = []   #Initialize a queue

def bfs(visited, graph, node):
 visited.append(node)
 queue.append(node)

 while queue:
  s = queue.pop(0) 
  print (s, end = " ") 

  for neighbour in graph[s]:
   if neighbour not in visited:
    visited.append(neighbour)
    queue.append(neighbour)

# Driver Code
bfs(visited, graph, 'S')

# End of Breadth First Search