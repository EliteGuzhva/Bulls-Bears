import yfinance as yf

msft = yf.Ticker("MSFT")

info = msft.info
print(info.keys())  # json

hist = msft.history(start="2020-12-01", end="2021-01-01", interval="1h")
print(hist)  # pandas dataframe
