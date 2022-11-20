cd portfolio
call build-portfolio.cmd
cd ..

cd stocks
call build-stocks.cmd
cd ..

echo %CMDCMDLINE%|find "%~f0">nul && PAUSE