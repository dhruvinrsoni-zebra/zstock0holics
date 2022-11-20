cd portfolio
call run-portfolio-image.cmd
cd ..

cd stocks
call run-stocks-image.cmd
cd ..

echo %CMDCMDLINE%|find "%~f0">nul && PAUSE