#version 330 core
out vec4 color;

in vec3 Normal;
in vec3 FragPos;

uniform vec3 ourColor;

void main() {
    // Luz ambiental para color base
    float ambientStrength = 0.3;
    vec3 ambient = ambientStrength * ourColor;
    
    // Luz difusa (simulamos una luz que viene desde arriba-derecha).
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(vec3(0.5f, 1.0f, 0.5f)); 
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * ourColor;
            
    vec3 result = ambient + diffuse;
    color = vec4(result, 1.0f);
}