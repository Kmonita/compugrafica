#version 330 core

in vec3 ourColor;
out vec4 color;

uniform vec3 tintColor;   // <- NUEVO (tinte por cubo)

void main()
{
    color = vec4(ourColor * tintColor, 1.0);
}