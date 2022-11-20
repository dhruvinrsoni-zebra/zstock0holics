cd portfolio
call create-portfolio-image.cmd
cd ..

cd stocks
call create-stocks-image.cmd
cd ..

echo %CMDCMDLINE%|find "%~f0">nul && PAUSE