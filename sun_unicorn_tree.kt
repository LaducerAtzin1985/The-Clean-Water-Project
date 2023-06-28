// file name: cleanWaterProject.kt 

// Imports 
import java.io.BufferedReader 
import java.io.InputStreamReader 
import java.util.ArrayList 
import kotlin.math.sqrt 

// Main Function 
fun main(args : Array<String>) {

// 1 
    // Declare variables 
    var name: String? 
    var waterSource: String? 
    var quantity: Int? 
    var population: Int? 
    var isClean: Boolean? 

// 2 
    // Get user input 
    print("Enter project name: ") 
    name = readLine() 
    print("Enter water source: ") 
    waterSource = readLine() 
    print("Enter quantity of water: ") 
    quantity = readLine()!!.toInt() 
    print("Enter population affected: ") 
    population = readLine()!!.toInt() 

// 3 
    // Calculate water requirements per person 
    val waterRequirement = quantity!! / population!! 

// 4 
    // Check if water meet standards 
    isClean = checkCleanliness(waterSource!!, waterRequirement) 

// 5 
    // Initialize an arraylist to store data 
    val projects = ArrayList<CleanWaterProject>() 

// 6 
    // Create a new project object with user input 
    val project = CleanWaterProject(name!!, waterSource!!, quantity!!, population!!, isClean!!) 

// 7 
    // Add new project to the arraylist 
    projects.add(project) 

// 8 
    // Output all project details 
    for (project in projects) {
        println("Project: ${project.name}") 
        println("Water Source: ${project.waterSource}") 
        println("Quantity: ${project.quantity} liters") 
        println("Population Affected: ${project.population}") 
        println("Cleanliness: ${project.isClean}") 
    }
}

// 9 
// Function to check cleanliness of water source 
fun checkCleanliness(source : String, waterRequirement: Int) : Boolean {
    when (source) {
        "river" -> return (waterRequirement >= 10) 
        "lake" -> return (waterRequirement >= 20) 
        "ocean" -> return (waterRequirement >= 30)  
    }
    return false 
}

// 10 
// Create a data class to store project data  
data class CleanWaterProject(val name: String, val waterSource: String, val quantity: Int, val population: Int, val isClean: Boolean)