
# DollarDash Budget Tracker  

## Overview  
DollarDash Budget Tracker is a **Django-based** personal finance application that helps users **track income, expenses, and budgets** efficiently. It provides an intuitive interface for financial management, bill reminders, and automated spending insights.  

## Features  

### Home Page  
- Displays **total budget for the month**  
- Shows **total expenses** and **remaining balance**  
- Option to **set up a new budget**  

### Menu Options  

1. **Income Management**  
   - Add **new income** (Cash or Online)  
   - Calculate **tax on income** using the formula:  
     ```
     Tax Amount = (Income * Tax Percentage) / 100
     ```
   - Users can manually input their **tax rate**  

2. **Expense Tracking**  
   - Log **spent money** (Cash or Online)  
   - Categorize expenses into **Food, Travel, Education, etc.**  

3. **Monthly & Annual Reports**  
   - Monthly overview: **total income, total expenses, and budget analysis**  
   - Annual financial summary with **savings trends**  
   - Calendar-based visualization for tracking  

4. **Transfer Money**  
   - Tracks **ATM withdrawals** and converts money from **Online to Cash**  
   - Ensures proper tracking of **fund transfers**  

5. **Bill Reminders**  
   - Set **upcoming bill payment reminders**  
   - Bills are marked as **Pending** until paid  
   - Once paid, the status updates to **Paid**  
   - API integration to directly **pay bills via Paytm**  

6. **User Profile**  
   - Stores **Name, Email, Contact Number, and Account Information**  

7. **Rewards System**  
   - Earn **stars** for staying within budget  
   - Collect **10 stars** to receive a **reward from the business**  

## Future Enhancements  
- **AI-driven spending insights** for better financial planning  
- **Graph-based analytics** for detailed expenditure visualization  
- **Subscription tracking** to manage recurring expenses  
- **Expense splitting** for shared costs  

## Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/Smritigit1202/dollardash.git
   ```  
2. Navigate to the project directory:  
   ```sh
   cd dollardash
   ```  
3. Create a virtual environment and activate it:  
   ```sh
   python -m venv env  
   source env/bin/activate  # On macOS/Linux  
   env\Scripts\activate     # On Windows   
   ```  
4. Run migrations:  
   ```sh
   python manage.py migrate  
   ```  
5. Start the Django development server:  
   ```sh
   python manage.py runserver  
   ```  

## Tech Stack  
- **Frontend:** React, Tailwind CSS  
- **Backend:** Django (Python)  
- **Database:** SQL  
- **Authentication:** Django Auth  

## Contributors  
- **Your Name** – Smriti Aggarwal
