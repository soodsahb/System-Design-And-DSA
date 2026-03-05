#include <iostream>
#include <cmath>
using namespace std;

class Time {
private:
    int hours;
    int minutes;
    int seconds;

public:

    // Default constructor
    Time() {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    // Parameterized constructor
    Time(int h, int m, int s) {
        hours = h;
        minutes = m;
        seconds = s;
    }

    // Destructor
    ~Time() {
        cout << "Destructor called\n";
    }

    void display() {
        cout << hours << ":" << minutes << ":" << seconds << endl;
    }

    bool isEqual(Time t) {
        return (hours == t.hours &&
                minutes == t.minutes &&
                seconds == t.seconds);
    }

    Time operator-(Time t) {

        int total1 = hours*3600 + minutes*60 + seconds;
        int total2 = t.hours*3600 + t.minutes*60 + t.seconds;

        int diff = abs(total1 - total2);

        int h = diff / 3600;
        diff %= 3600;

        int m = diff / 60;
        int s = diff % 60;

        return Time(h,m,s);   // ✔ safest
    }
};

int main() {

    Time t1(3,20,40);
    Time t2(3,21,40);

    cout<<"Time 1: ";
    t1.display();

    cout<<"Time 2: ";
    t2.display();

    if(t1.isEqual(t2))
        cout<<"Times are equal\n";
    else
        cout<<"Times are not equal\n";

    Time t3 = t1 - t2;

    cout<<"Difference: ";
    t3.display();

    return 0;
}