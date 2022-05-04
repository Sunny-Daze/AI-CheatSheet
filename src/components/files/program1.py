# 

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

