#include <iostream>
using namespace std;
int main()
{
    // pallidrome
    int n;
    cout << "Enter a number : ";
    cin >> n;
    // reverse the number
    for (int i = 1; i <= 3; i++)
    {
        n = n % 10;

        n = n / 10;
        cout << n;
    }
}